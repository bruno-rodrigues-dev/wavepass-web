import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Destaques.css";

import { eventos } from "../../data/eventos";
import { formatarData } from "../../utils/formatarData";

function Destaques() {
    const [ativo, setAtivo] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const evento = eventos[ativo];

    return (
        <section className="destaques">
            <Swiper
                modules={[Autoplay]}
                className="destaques-carrossel"
                slidesPerView={1.6}
                centeredSlides
                loop
                spaceBetween={-120}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                onSwiper={setSwiper}
                onSlideChange={(s) => setAtivo(s.realIndex)}
            >
                {eventos.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.imagem} alt={item.titulo} className="destaques-imagem" />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="destaques-pontos">
                {eventos.map((item, i) => (
                    <button
                        key={item.id}
                        type="button"
                        className={i === ativo ? "destaques-ponto ativo" : "destaques-ponto"}
                        onClick={() => swiper?.slideToLoop(i)}
                        aria-label={`Ir para ${item.titulo}`}
                    />
                ))}
            </div>

            <h2 className="destaques-titulo">{evento.titulo}</h2>

            <div className="destaques-info">
                <span>
                    <i className="fi fi-rr-marker"></i>
                    {evento.cidade} - {evento.estado}
                </span>
                <span>
                    <i className="fi fi-rr-calendar"></i>
                    {formatarData(evento.data)}
                </span>
            </div>
        </section>
    );
}

export default Destaques;