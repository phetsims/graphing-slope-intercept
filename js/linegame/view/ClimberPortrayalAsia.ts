// Copyright 2024, University of Colorado Boulder

/**
 * This file instantiates the Asia region and culture portrayals.
 *
 * @author Luisa Vargas
 */

import JoistStrings from '../../../../joist/js/JoistStrings.js';
import { ASIA_REGION_AND_CULTURE_ID } from '../../../../joist/js/preferences/RegionAndCulturePortrayal.js';
import ClimberPortrayal from '../../../../graphing-lines/js/linegame/view/ClimberPortrayal.js';
import level1_svg from '../../../../graphing-lines/images/asia/level1_svg.js';
import level3_svg from '../../../../graphing-lines/images/asia/level3_svg.js';
import level5_svg from '../../../../graphing-lines/images/asia/level5_svg.js';
import level6_svg from '../../../../graphing-lines/images/asia/level6_svg.js';

const asiaStringProperty = JoistStrings.preferences.tabs.localization.regionAndCulture.portrayalSets.asiaStringProperty;

const ClimberPortrayalAsia = new ClimberPortrayal(
  ASIA_REGION_AND_CULTURE_ID,
  asiaStringProperty,
  level1_svg,
  level3_svg,
  level5_svg,
  level6_svg
);

export default ClimberPortrayalAsia;