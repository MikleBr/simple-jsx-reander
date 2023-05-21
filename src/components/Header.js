import { createNodeFromJSX } from '../core/createNode.js';

export function Header() {
  return (
    <header class="header">
      <nav class="nav">
        <a href="https://google.com" class="link">
          Home
        </a>
        <a href="https://google.com" class="link">
          About
        </a>
        <a href="https://google.com" class="link">
          Projects
        </a>
      </nav>
    </header>
  );
}
