export default function setupDom() {
  const getLite = async () => {
    const Lite = (await import("@justinribeiro/lite-youtube")).LiteYTEmbed;
    /**
     * lets create new lite-youtube because native module
     * has weird css layout within:
     * #frame, iframe, #fallbackPlaceholder {}
     * that doesn't render properly
     */

    class NewLite extends Lite {
      setupDom() {
        const shadowDom = this.attachShadow({ mode: "open" });
        shadowDom.innerHTML = `
      <style>
        :host {
          contain: content;
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }
        #frame {
            position: relative;
            width: 100%;
            height: 100%;
        }
        iframe, #fallbackPlaceholder {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0px;
          top: 0px;
        }

        #frame {
          cursor: pointer;
        }

        #fallbackPlaceholder {
          object-fit: cover;
        }

        #frame::before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
          background-position: top;
          background-repeat: repeat-x;
          height: 60px;
          padding-bottom: 50px;
          width: 100%;
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          z-index: 1;
        }
        /* play button */
        .lty-playbtn {
          width: 70px;
          height: 46px;
          background-color: #212121;
          z-index: 1;
          opacity: 0.8;
          border-radius: 14%; /* TODO: Consider replacing this with YT's actual svg. Eh. */
          transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
          border: 0;
        }
        #frame:hover .lty-playbtn {
          background-color: #f00;
          opacity: 1;
        }
        /* play button triangle */
        .lty-playbtn:before {
          content: '';
          border-style: solid;
          border-width: 11px 0 11px 19px;
          border-color: transparent transparent transparent #fff;
        }
        .lty-playbtn,
        .lty-playbtn:before {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }

        /* Post-click styles */
        .lyt-activated {
          cursor: unset;
        }

        #frame.lyt-activated::before,
        .lyt-activated .lty-playbtn {
          display: none;
        }
      </style>
      <div id="frame">
        <picture>
          <source id="webpPlaceholder" type="image/webp">
          <source id="jpegPlaceholder" type="image/jpeg">
          <img id="fallbackPlaceholder" referrerpolicy="origin">
        </picture>
        <button class="lty-playbtn"></button>
      </div>
    `;
        this.domRefFrame = this.shadowRoot.querySelector("#frame");
        this.domRefImg = {
          fallback: this.shadowRoot.querySelector("#fallbackPlaceholder"),
          webp: this.shadowRoot.querySelector("#webpPlaceholder"),
          jpeg: this.shadowRoot.querySelector("#jpegPlaceholder"),
        };
        this.domRefPlayButton = this.shadowRoot.querySelector(".lty-playbtn");
      }
    }
    NewLite.preconnected = false;
    // Register custom element
    customElements.define("lite-yt", NewLite);
    //# sourceMappingURL=lite-youtube.js.map
  };
  getLite();
}
