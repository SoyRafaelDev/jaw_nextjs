
import React from "react";
import { Button } from "./ui/button";

export default function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden bg-white w-full flex items-center justify-center m-2">
      <div className="max-w-md flex flex-col items-center">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 text-center">Boletín de noticias</h2>
        <div className="mt-2 flex flex-col sm:flex-row items-center">
          <label htmlFor="email-address" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Correo electrónico"
            className="min-w-0 w-full rounded-md bg-black/10 px-3.5 py-2 border-2 focus:ring-green-900 focus:ring-2 focus:outline-none"
          />
          <Button
            type="submit"
            className="sm:ml-4 flex-shrink-0 w-full sm:w-auto rounded-md bg-green-800 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 mt-2 sm:mt-0"
          >
            Suscribirse
          </Button>
        </div>
      </div>
    </div>
  );
}