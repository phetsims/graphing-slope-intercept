// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Latin America region and culture portrayals.
 *
 * @author Luisa Vargas
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { LATIN_AMERICA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import ClimberPortrayal from '../../../../graphing-lines/js/linegame/view/ClimberPortrayal.js';
import level1_svg from '../../../../graphing-lines/images/latin-america/level1_svg.js';
import level3_svg from '../../../../graphing-lines/images/latin-america/level3_svg.js';
import level5_svg from '../../../../graphing-lines/images/latin-america/level5_svg.js';
import level6_svg from '../../../../graphing-lines/images/latin-america/level6_svg.js';

const latinAmericaStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.latinAmericaStringProperty;

const ClimberPortrayalLatinAmerica = new ClimberPortrayal(
  LATIN_AMERICA_REGION_AND_CULTURE_ID,
  latinAmericaStringProperty,
  [ level1_svg, level3_svg, level5_svg, level6_svg ]
);

export default ClimberPortrayalLatinAmerica;