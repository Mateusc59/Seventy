import './clip-container.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <slot/>
`;

class ClipContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        setTimeout(this.init.bind(this), 0);
    }

    init() {
        this.progress = { value: 0 };

        this.slides = this.children;
        this.parallaxImgs = this.querySelectorAll('parallax-el');

        const disable_scrolltrigger =
            this.dataset.disableScrolltrigger == undefined ||
            this.dataset.disableScrolltrigger == 'false'
                ? false
                : true;

        let tween_parameters = {
            value: 1,
            ease: 'none',
            onUpdate: () => {
                this.update(this.progress.value);
            },
        };

        if (!disable_scrolltrigger) {
            tween_parameters.scrollTrigger = {
                trigger: this,
                scrub: 1,
                start: 'top bottom',
                end: 'top top',
            };
        }

        this.tween = gsap.to(this.progress, tween_parameters);
        if (disable_scrolltrigger) {
            this.tween.pause();
        }
    }

    lerp(start, end, progress) {
        return start + (end - start) * progress;
    }

    update(progress) {
        this.progress.value = progress;
        const slide = this.slides[1];
        slide.style.webkitClipPath = slide.style.clipPath = `inset(0 0 0 ${progress * 100}vw)`; // Using % instead of vw or px doesn't work on ipad
    }

    disconnectedCallback() {
        this.tween?.kill();
        this.tween = null;
    }
}

window.customElements.define('clip-container', ClipContainer);
export default {};
