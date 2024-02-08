// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the USA region and culture portrayals.
 *
 * @author Luisa Vargas
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { USA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import level1_svg from '../../../../graphing-lines/images/usa/level1_svg.js';
import level3_svg from '../../../../graphing-lines/images/usa/level3_svg.js';
import level5_svg from '../../../../graphing-lines/images/usa/level5_svg.js';
import level6_svg from '../../../../graphing-lines/images/usa/level6_svg.js';
import ClimberPortrayal from '../../../../graphing-lines/js/linegame/view/ClimberPortrayal.js';

const unitedStatesOfAmericaStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.unitedStatesOfAmericaStringProperty;

const ClimberPortrayalUSA = new ClimberPortrayal(
  USA_REGION_AND_CULTURE_ID,
  unitedStatesOfAmericaStringProperty,
  level1_svg,
  level3_svg,
  level5_svg,
  level6_svg
);

export default ClimberPortrayalUSA;