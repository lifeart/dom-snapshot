export default function (element) {
    // https://www.w3.org/TR/SVG/propidx.html
    const isSVGNode = element.nodeName.toLowerCase() === 'svg';
    if (isSVGNode) {
        element.dataset.svg = true;
        return true;
    }
    if (!element.parentNode || !element.parentNode.dataset) {
        return false;
    }
    let svgResult = element.parentNode.dataset.svg;
    if (svgResult && element.dataset) {
        element.dataset.svg = true;
    }
    if (svgResult === 'true') {
        svgResult = true;
    }
    return svgResult || false;
}