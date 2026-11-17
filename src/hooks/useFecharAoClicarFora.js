import { useEffect } from "react";

export function useFecharAoClicarFora(ref, fechar) {
    useEffect(() => {
        function clicarFora(evento) {
            if (ref.current && ! ref.current.contains(evento.target)) {
                fechar();
            }
        }

        function apertarEsc(evento) {
            if (evento.key === "Escape") fechar ();
        }

        document.addEventListener("mousedown", clicarFora);
        document.addEventListener("keydown", apertarEsc);

        return () => {
            document.removeEventListener("mousedown", clicarFora);
            document.removeEventListener("keydown", apertarEsc);
        };
    }, [ref, fechar])
}