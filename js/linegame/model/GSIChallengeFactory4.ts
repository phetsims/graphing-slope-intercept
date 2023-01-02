// Copyright 2017-2020, University of Colorado Boulder

// @ts-nocheck
/**
 * Creates game challenges for Level 4 in the 'Graphing Slope-Intercept' sim.
 * Identical to level 3, except with different Place-the-Point challenges.
 * See createPlaceThePointChallenges.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Line from '../../../../graphing-lines/js/common/model/Line.js';
import EquationForm from '../../../../graphing-lines/js/linegame/model/EquationForm.js';
import PlaceThePoints from '../../../../graphing-lines/js/linegame/model/PlaceThePoints.js';
import ValuePool from '../../../../graphing-lines/js/linegame/model/ValuePool.js';
import graphingSlopeIntercept from '../../graphingSlopeIntercept.js';
import GSIChallengeFactory3 from './GSIChallengeFactory3.ts';

class GSIChallengeFactory4 extends GSIChallengeFactory3 {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {
    super( options );
  }

  /**
   * Level 4 has a different set of place-the-point challenges, so override this function.
   * @returns {PlaceThePoints[]}
   * @protected
   * @override
   */
  createPlaceThePointChallenges() {

    const challenges = [];

    // CHALLENGE 5
    const yIntercepts = ValuePool.rangeToArray( this.yRange, { excludeZero: true } );
    const yIntercept = ValuePool.choose( yIntercepts );
    challenges.push( new PlaceThePoints(
      '5: PlaceThePoints, slope=0, random y-intercept (not zero)',
      new Line( 0, yIntercept, 1, yIntercept ),
      EquationForm.SLOPE_INTERCEPT,
      this.xRange, this.yRange ) );

    // CHALLENGE 6
    const xIntercepts = ValuePool.rangeToArray( this.xRange, { excludeZero: true } );
    const xIntercept = ValuePool.choose( xIntercepts );
    challenges.push( new PlaceThePoints(
      '6: PlaceThePoints, slope=undefined, random x-intercept (not zero)',
      new Line( xIntercept, 0, xIntercept, 1 ),
      EquationForm.SLOPE_INTERCEPT,
      this.xRange, this.yRange ) );

    return challenges;
  }
}

graphingSlopeIntercept.register( 'GSIChallengeFactory4', GSIChallengeFactory4 );
export default GSIChallengeFactory4;