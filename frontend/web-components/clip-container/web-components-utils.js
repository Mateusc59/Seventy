import gsap from 'gsap';

/*
    When an attribute contains media queries,
    we need the component to use the correct value
    depending on which condition is being met.
 */
export function parseResponsiveAttribute(value) {
    if (!value) return value;

    if (value.includes('(') && value.includes(')') && value.includes(':') && value.includes('=')) {
        let current_value;
        const mm = gsap.matchMedia();
        let items = value.split(';');
        for (let i = 0; i < items.length; i++) {
            let item = items[i].trim();
            if (item) {
                let parts = item.split('=');
                let condition = parts[0].trim();
                let value = parts[1].trim();
                mm.add(condition, () => {
                    current_value = value;
                    if (this.tween) {
                        this.disconnectedCallback();
                        this.connectedCallback();
                    }
                });
            }
        }
        return current_value;
    } else {
        return value;
    }
}

/*
    Retrieves HTML attributes related to GSAP ScrollTrigger.
    This part is common to most web-components.
 */
export function retrieveScrollTriggerAttributes() {
    return {
        disable: (() => {
            let attribute = parseResponsiveAttribute.call(this, this.dataset.disableScrolltrigger);
            return attribute == undefined || attribute == 'false' ? false : true;
        })(),
        trigger: parseResponsiveAttribute.call(this, this.dataset.scrollTrigger),
        endTrigger: parseResponsiveAttribute.call(this, this.dataset.scrollEndTrigger),
        start: parseResponsiveAttribute.call(this, this.dataset.scrollStart),
        end: parseResponsiveAttribute.call(this, this.dataset.scrollEnd),
        ease: parseResponsiveAttribute.call(this, this.dataset.ease),
        scrub: parseFloat(parseResponsiveAttribute.call(this, this.dataset.scrub)),
    };
}
