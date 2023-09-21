// hooks
import { useState, useEffect } from "react";

// firebase
import { database } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchOneDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) {
        return;
      }

      setLoading(true);

      try {
        const docRef = await doc(database, docCollection, id)
        const docSnap = await getDoc(docRef)

        setDocument(docSnap.data())
      } catch (error) {
        setError(error.message)
      } finally {
          
          setLoading(false);
      }

    }

    loadDocument();
  }, [docCollection, id, cancelled]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, loading, error };
};
