// import noise from './noise';

// export const duneContants = {};

/** Kinds of leaves.
 * Something
**/

class Leaves {
  renderLeaves(width, height, svg) {
    this.width = width;
    this.height = height;
    this.svg = svg;

    this.renderLeaf(svg, width / 8, height / 8, width / 2, height * (2 / 3));
  }

  renderLeaf(svg, width, height, x, y) {
    let pathD = `M ${x} ${y}`;

    pathD += ` L ${x} ${y - 20}`;
    pathD += ` Q ${x - 100} ${(y / 2) + 100} ${x} ${y / 2}`;
    pathD += ` Q ${x + 100} ${(y / 2) + 100} ${x} ${y - 20}`;

    svg.append('path')
      .attr('d', pathD)
      .attr('class', 'leaf-base-line');
  }
}

export default Leaves;