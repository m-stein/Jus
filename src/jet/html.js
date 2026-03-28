/**
 * @param {HTMLElement} elem
 * @param {string} attr
 * @returns {string}
 */
export function getHtmlAttr(elem, attr) {
    const value = elem.getAttribute(attr);
    if (!value) {
        throw new Error(`No attribute "${attr}" in element "${elem.id}"`);
    }
    return value;
}

/**
 * @template {HTMLElement} T
 * @param {HTMLDocument} doc
 * @param {string} id
 * @param {new (...args: any[]) => T} type
 * @returns {T}
 */
export function getHtmlElem(doc, id, type) {
    const value = doc.getElementById(id);
    if (!value) {
        throw new Error(`No element "${id}" in document`);
    }
    if (!(value instanceof type)) {
        throw new Error(`Element "${id}" is not of expected type`);
    }
    return value;
}
