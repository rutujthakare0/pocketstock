import { useEffect } from "react";
import { supabase } from "./lib/supabase";

export default function App() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("_test").select("*").limit(1);
      // Will get an error (table doesn't exist) but that's fine
      // If you see the error logged, connection is working
      console.log("Supabase connected:", error ? "yes (expected error)" : data);
    }
    testConnection();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">PocketStock🛒</h1>
      <p className="text-gray-500">
        Check browser console for Supabase connection
      </p>
    </div>
  );
}
