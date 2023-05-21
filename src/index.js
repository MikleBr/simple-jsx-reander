import { createNodeFromJSX } from './core/createNode.js';
import { Header } from './components/Header.js';
import { renderNode } from './core/render.js';

const page = (
  <div class="page">
    <Header />
  </div>
);

const root = document.querySelector('.root');
const app = renderNode(page);
root.appendChild(app);
