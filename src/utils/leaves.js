// import noise from './noise';

// export const duneContants = {};

// Leaf heirarchy starts at one of two leaf types.
// http://www.ibiblio.org/botnet/glossary/a_v.html
// https://www.cs.rochester.edu/~nelson/wildflowers/glossaries/leaves/index.html#structure
const LEAF_TYPES = {
  // https://www.uwgb.edu/biodiversity/herbarium/trees/simple_compound_leaves01.htm
  // Easy way to see the difference is that compound leaves have no buds at each leaflet (only the start of the leaf).
  COMPOUND: {
    // Has leaflets - pinnation descrives how the leaflets come off of the common leaf stem.
    id: 'COMPOUND',
    title: 'Compound'
  },
  SIMPLE: {
    id: 'SIMPLE',
    title: 'Simple'
  }
};
const LEAF_TYPE_KEYS = Object.keys(LEAF_TYPES);

// const COMPOUND_LEAF_STRUCTURES = {
//   bifoliolate
//   BIFOLIOLATE
// };

// https://en.wikipedia.org/wiki/Leaf

const LEAF_SHAPE_REFERENCES = {
  ENTIRE_LEAF: {
    id: 'ENTIRE_LEAF',
    title: 'Entire leaf'
  },
  LEAF_TIP: {
    id: 'LEAF_TIP',
    title: 'Leaf tip'
  },
  LEAF_TIP_OR_BASE: {
    id: 'LEAF_TIP_OR_BASE',
    title: 'Leaf tip or base'
  }

};

// Leaf and leaflet shapes:
// https://en.wikipedia.org/wiki/Glossary_of_leaf_morphology#Leaf_and_leaflet_shapes
const LEAF_SHAPE_TYPES = {
  ACICULAR: {
    id: 'ACICULAR',
    term: 'Acicular',
    latin: 'Acicularis',
    refersTo: LEAF_SHAPE_REFERENCES.ENTIRE_LEAF.id,
    description: 'Slender and pointed, needle-like.'
  }, 
  ACUMINATE: {
    id: 'ACUMINATE',
    term: 'acuminate',
    latin: 'acuminatus',
    refersTo: LEAF_SHAPE_REFERENCES.LEAF_TIP.id,
    description: 'Tapering to a long point in a concave manner.'
  }, 
  ACUTE: {
    id: 'ACUTE',
    term: 'acute',
    // latin: 'acuminatus',
    refersTo: LEAF_SHAPE_REFERENCES.LEAF_TIP_OR_BASE.id,
    description: 'Pointed, having a short sharp apex angled less than 90°.'
  },
  APICULATE: {
    id: 'APICULATE',
    term: 'apiculate',
    // latin: 'apiculatus',
    refersTo: LEAF_SHAPE_REFERENCES.LEAF_TIP_OR_BASE.id,
    description: 'Tapering and ending in a short, slender point.'
  },
  // aristate	aristatus	leaf tip	Ending in a stiff, bristle-like point.
  // attenuate	attenuatus	leaf base	Having leaf tissue taper down the petiole to a narrow base, always having some leaf material on each side of the petiole.
  // auriculate	auriculatus	leaf base	Having ear-shaped appendages reaching beyond the attachment to the petiole or to the stem (in case of a seated leaf).
  // asymmetrical		entire leaf	With the blade shape different on each side of the midrib.
  // caudate	caudatus	leaf tip	Tailed at the apex.
  // cordate	cordatus	entire leaf	Heart-shaped, with the petiole or stem attached to the notch.
  // cuneate	cuneatus	leaf base	Triangular, wedge-shaped, stem attaches to point.
  // cuspidate	cuspidatus	leaf tip	With a sharp, elongated, rigid tip; tipped with a cusp.
  // deltoid or deltate	deltoideus	entire leaf	Shaped like Greek letter Delta, triangular, stem attaches to side.
  // digitate	digitatus	entire leaf	With finger-like lobes, similar to palmate.[2]
  // elliptic	ellipticus	entire leaf	Oval, with a short or no point.
  // ensiform	ensiformis	entire leaf	Shaped like a sword, long and narrow with a sharp pointed tip.
  // emarginate	ermarginatus	leaf tip	Slightly indented at the tip.
  // falcate	falcatus	entire leaf	Sickle-shaped.
  // fenestrate	fenestratus	surface features	Large openings through the leaf, see perforate. Sometimes use to describes leaf epidermal windows.
  // filiform	filiformis	entire leaf	Thread- or filament-shaped.
  // flabellate	flabellatus	entire leaf	Semi-circular, or fan-like.
  // hastate	hastatus	entire leaf	Spear-shaped: Pointed, with barbs, shaped like a spear point, with flaring pointed lobes at the base.
  // laciniate	lacinatus	entire leaf	Very deeply lobed, the lobes being very drawn out, often making the leaf look somewhat like a branch or a pitchfork.
  // lanceolate	lanceolatus	entire leaf	Long, wider in the middle, shaped like a lance tip.
  // laminar		3-d shape	Flat (like most leaves)
  // linear	linearis	entire leaf	Long and very narrow like a blade of grass.
  // lobed	lobatus	entire leaf	Being divided by clefts, may be pinnately lobed or palmately lobed.
  // lorate	loratus	entire leaf	Having the form of a thong or strap.
  // lyrate	lyratus	entire leaf	Shaped like a lyre, pinnately lobed leaf with an enlarged terminal lobe and smaller lateral lobes.
  // mucronate	mucronatus	leaf tip	Ending abruptly in a small sharp point as a continuation of the midrib.[3]
  // multifid	multi + findere	entire leaf	Cleft into many parts or lobes.
  // obcordate	obcordatus	entire leaf	Heart-shaped, stem attaches at the tapering end.
  // oblanceolate	oblanceolatus	entire leaf	Much longer than wide and with the widest portion near the tip, reversed lanceolate.
  // oblique		leaf base	Asymmetrical leaf base, with one side lower than the other
  // oblong	oblongus	entire leaf	Having an elongated form with slightly parallel sides, roughly rectangular.
  // obovate	obovatus	entire leaf	Teardrop-shaped, stem attaches to the tapering end; reversed ovate.
  // obtrullate		entire leaf	Reversed trullate, the longer sides meet at the base rather than the apex.
  // obtuse	obtusus	tip	Blunt, forming an angle > 90°.
  // orbicular	orbicularis	entire leaf	Circular.
  // ovate	ovatus	entire leaf	Oval, egg-shaped, with a tapering point and the widest portion near the petiole.
  // palmate	palmatus	entire leaf	Palm-shaped, i.e., with lobes or leaflets stemming from the leaf base.[4]
  // palmately lobed	palmatus	entire leaf	Lobes spread radially from a point. [5]
  // palmatifid	palma + findere	entire leaf	Palm-shaped, having lobes with incisions that extend less than half-way toward the petiole.
  // palmatipartite	palma + partiri	entire leaf	Having lobes with incisions that extend over half-way toward the petiole.
  // palmatisect	palma + secare	entire leaf	Having lobes with incisions that extend almost up, but not quite to the petiole.
  // pandurate	panduratus	entire leaf	Fiddle-shaped; obovate with a constriction near the middle.
  // pedate	pedatus	entire leaf	Palmate, with cleft lobes.[6]
  // peltate	peltatus	stem attachment	A round leaf where the petiole attaches near the center. An example would be a lotus leaf.
  // perfoliate	perfoliatus	stem attachment	With the leaf blade surrounding the stem such that the stem appears to pass through the leaf.
  // perforate	perforatus	leaf surface features	Many holes, or perforations on leaf surface. Compare with fenestrate.
  // pinnately lobed	pinna + lobus	entire leaf	Having lobes pinnately arranged on the central axis.
  // pinnatifid	pinna + findere	entire leaf	Having lobes with incisions that extend less than half-way toward the midrib.
  // pinnatipartite	pinnatus + partiri	entire leaf	Having lobes with incisions that extend more than half-way toward the midrib.
  // pinnatisect	pinnatus + sectus	entire leaf	Having lobes with incisions that extend almost, or up to midrib.
  // plicate	plicatus	3-d shape	Folded into pleats, usually lengthwise, serving the function of stiffening a large leaf.
  // reniform	reniformis	entire leaf	Shaped like a kidney: an oval with an inward curve on one side.
  // retuse		leaf tip	With a shallow notch in a round apex.
  // rhomboid or rhombic	rhomboidalis	entire leaf	Diamond-shaped.
  // rounded	rotundifolius	leaf tip or base	Circular, no distinct point.
  // semiterete		3-d shape	Rounded on one side, but flat on the other.
  // sinuate	sinuatus	3-d shape	Circularly-lobed kind of leaves
  // sagittate	sagittatus	entire leaf	Arrowhead-shaped with the lower lobes folded, or curled downward
  // spatulate	spathulatus	entire leaf	Spoon-shaped; having a broad flat end which tapers to the base
  // spear-shaped	hastatus	entire leaf	see hastate.
  // subobtuse	subobtusus	leaf tip or base	Somewhat blunted, neither blunt nor sharp
  // subulate	subulatus	leaf tip	Awl-shaped with a tapering point
  // terete		3-d shape	Circular in cross-section; more or less cylindrical without grooves or ridges.
  // trullate		entire leaf	Shaped like a bricklayer's trowel
  // truncate	truncatus	leaf tip or base	With a squared-off end
  // undulate	undulatus	3-d shape	Wave-like
  // unifoliate	unifoliatus	compound leaves	With a single leaflet. It is distinct from a simple leaf by the presence of two abcission layers and often by petiolules and stipels
};

console.log('LEAF_SHAPE_TYPES', LEAF_SHAPE_TYPES);

// Algorithm that classifies leaves: https://www.sciencedirect.com/science/article/pii/S1319157817303129

/** Ways leaflets or simple leaves differ:
 * Shape & arrangement: https://www.thoughtco.com/thmb/oSALleyJPHmPM1wc917TcMwHO9Y=/465x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/leaf_shape-56af60e83df78cf772c3b710.JPG
 *  Contains the apex
 * Leaf edges/Margin: https://www.thoughtco.com/thmb/iHN-HjqaQAvpt5pjM96it6qcnwU=/743x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/leaf_margin-56af612d3df78cf772c3b94a.JPG
 * Leaf Veins and Venation Patterns: https://www.thoughtco.com/thmb/_ciKl3akxGCGozqw6jY9-klWNdw=/321x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/leaf_veins-56af61313df78cf772c3b95e.JPG
**/

const LEAF_MARGIN_CLASSIFICATIONS = {
  ENTIRE: {
    id: 'ENTIRE',
    title: 'Entire Leaf',
    description: 'The margin is even and smooth around the entire leaf edge.'
  }, TOOTHED: {
    id: 'TOOTHED',
    title: 'Toothed Leaf',
    description: 'The margin has a series of toothlike pointed teeth around the entire leaf edge.'
  }, LOBED: {
    id: 'LOBED',
    title: 'Lobed Leaf',
    description: 'The margin has an indention or indentions that go less than halfway to the leaf midrib or midline.'
  }, PARTED: {
    id: 'PARTED',
    title: 'Parted Leaf',
    description: 'The margin has an indention or indentions that go more than halfway to the leaf midrib or midline.'
  }
};

console.log('LEAF_MARGIN_CLASSIFICATIONS', LEAF_MARGIN_CLASSIFICATIONS);

// const LEAF_MARGIN_TYPES = {
//   Undulate: having a wavy margin.
//   Sinuate: with a sinous margin.
//   Serrate: having a sharp edge.
//   Dentate: having a toothed margin.
//   Lobate: lobed.
//   Scalloped: with a scalloped margin.
//   Palmate: like the fingers of a hand spread open.
//   Digitate: finger like.
//   Bipinnatisect: with 2 levels of petioles which segments are sessile.
//   Tripinnatisect: with 3 levels of petioles which segments are sessile.
//   Pinnatisect: with similar parts on each side of the central axis and sessile.
//   Palmatisect: with palmate veins and lobes split to the base of the blade.
//   Pedate: palmately divided which lateral segments also divided.
//   Palmatilobate: palmate leaf with rounded lobes.
//   Bipartite: divided into two parts.
//   Tripartite: divided into three parts.
//   Palmatipartite: divided almost to the leaf margin.
//   Pinnatifid: with pinnated divisions.
// }

const LEAF_VEIN_CLASSIFICATIONS = {
  PINNATE: {
    id: 'PINNATE',
    title: 'Pinnate Venation',
    description: 'The veins extend from the midrib to the leaf margin.'
  }, PALMATE: {
    id: 'PALMATE',
    title: 'Palmate Venation',
    description: 'The margin has a series of toothlike pointed teeth around the entire leaf edge.'
  }
};
console.log('LEAF_VEIN_CLASSIFICATIONS', LEAF_VEIN_CLASSIFICATIONS);



class Leaves {
  renderLeaves(width, height, svg) {
    this.width = width;
    this.height = height;
    this.svg = svg;

    const directionCos = Math.PI / 2;
    this.renderLeaf(svg, width / 8, height / 8, width / 2, height * (2 / 3), directionCos);
  }

  renderLeaf(svg, width, height, x, y, directionCos) {
    let pathD = `M ${x} ${y}`;

    // for (let i = 0; i < LEAF_TYPE_KEYS.length; i++) {
      const leafType = LEAF_TYPE_KEYS[Math.floor(Math.random() * LEAF_TYPE_KEYS.length)];

      switch (leafType) {
        case LEAF_TYPES.COMPOUND.id:
          pathD += ` L ${x} ${y - 20}`;
          pathD += ` Q ${x - 100} ${(y / 2) + 100} ${x} ${y / 2}`;
          pathD += ` Q ${x + 100} ${(y / 2) + 100} ${x} ${y - 20}`;
        break;
        case LEAF_TYPES.SIMPLE.id:
          pathD += ` L ${x} ${y - 20}`;
          pathD += ` Q ${x - 100} ${(y / 2) + 100} ${x} ${y / 2}`;
          pathD += ` Q ${x + 100} ${(y / 2) + 100} ${x} ${y - 20 + directionCos}`;
        break;
        default:
          throw Error('Unrecognized leaf type.');
      }
    // }

    svg.append('path')
      .attr('d', pathD)
      .attr('class', 'leaf-base-line');
  }
}

export default Leaves;