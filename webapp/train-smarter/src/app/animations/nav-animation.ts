import {AnimationController, Animation, createAnimation} from '@ionic/angular';


export const pageAnimation = (baseEL: HTMLElement, opts?: any): Animation => {
  const DURATION = 300;

  // root animation with common setup for the whole transition
  const rootTransition = createAnimation()
    .duration(opts.duration || DURATION)
    .easing('cubic-bezier(0.3,0,0.66,1)');

  // ensure that the entering page is visible from the start of the transition
  const enteringPage = createAnimation()
    .addElement(opts.enteringEl)
    .beforeRemoveClass('ion-page-invisible');

  // create animation for the leaving page
  const leavingPage = createAnimation().addElement(opts.leavingEl);

  // actual customized animation
  if (opts.direction === 'forward') {
    enteringPage.fromTo('opacity', '0.1', '1').fromTo('transform', 'translateY(100%)', 'translateY(0)');
    leavingPage.fromTo('opacity', '1', '0.1');
  } else {
    leavingPage.fromTo('transform', 'translateY(0)', 'translateY(100%)');
    enteringPage.fromTo('opacity', '0.1', '1');
  }

  // include animations for both pages into the root animation
  rootTransition.addAnimation(enteringPage);
  rootTransition.addAnimation(leavingPage);
  return rootTransition;
};
