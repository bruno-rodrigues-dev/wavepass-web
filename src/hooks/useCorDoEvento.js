import { useState, useEffect } from "react";
import { Vibrant } from "node-vibrant/browser";

const corPadrao = { principal: "#363333", texto: "#ffffff" };

export function useCorDoEvento(imagem) {
    const [cor, setCor] = useState(corPadrao);

    useEffect(() => {
        if (!imagem) return;
        let cancelado = false;

        Vibrant.from(imagem)
            .getPalette()
            .then((paleta) => {
                const amostra = paleta.Vibrant ?? paleta.Muted ?? paleta.DarkVibrant;
                if (amostra && !cancelado) {
                    setCor({ principal: amostra.hex, texto: amostra.titleTextColor });
                }
            })
            .catch(() => {});

        return () => {
            cancelado = true;
        };
    }, [imagem]);

    return cor;
}