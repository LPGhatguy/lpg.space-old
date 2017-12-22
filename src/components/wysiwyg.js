import React from "react";

import "./wysiwyg.css";

export const Wysiwyg = ({ children }) => <div className="Wysiwyg">{ children }</div>

export const P = ({ children }) => <div className="Wysiwyg-paragraph">{ children }</div>
export const Bold = ({ children }) => <span className="Wysiwyg-bold">{ children }</span>
export const Italic = ({ children }) => <span className="Wysiwyg-italic">{ children }</span>
export const Ul = ({ children }) => <ul className="Wysiwyg-ul">{ children }</ul>
export const Li = ({ children }) => <li className="Wysiwyg-li">{ children }</li>
export const A = (props) => <a className="Wysiwyg-link" href="#shut-up-jsx-a11y" children="LINK" { ...props } />

export const Image = ({ url, alt }) => <img src={ url } alt={ alt } className="Wysiwyg-image" />