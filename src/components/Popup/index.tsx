import imageModal from "../../assets/modal.png";
import { EnvelopeSimple, PaperPlaneTilt } from "phosphor-react";
import { useState, useEffect } from "react";
import "./styles.scss";

export default function Popup() {
    const [closeElement, setCloseElement] = useState(true);
    const closeOrHide = () => setCloseElement(false);

    useEffect(() => {
        if (closeElement === false) {
            document.body.classList.add("removeModal");
        }
    }, [closeElement]);

    return (
        <div id="modal_login">
            <div className="popup_modal">
                <div className="close_modal">
                    <button onClick={closeOrHide}>FECHAR</button>
                </div>

                <div className="content_modal">
                    <div className="image_modal">
                        <img src={imageModal} alt="image modal gym" />
                    </div>

                    <div className="form_modal">
                        <EnvelopeSimple size={32} />
                        <span>Bem Vindo à MAEZTRA</span>
                        <p>Receba em Primeira mão </p>
                        <strong>desconto e ofertas exclusivas</strong>
                        <form>
                            <input type="email" placeholder="Digite seu e-mail" />
                            <button>
                                ENVIAR <PaperPlaneTilt size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
