import {AnimationController, Animation} from '@ionic/angular';

export const pageAnimation = (baseEL: HTMLElement, opts?: any): Animation => {
  const DURATION = 300;

  const animationCtrl = new AnimationController();
  // Standard Transition
  const rootTransition = animationCtrl.create()
    .duration(opts.duration || DURATION)
    .easing('cubic-bezier(0.3,0,0.66,1)');

  // entfernt ion-page-invisible, damit die neue Page direkt sichtbar ist
  const enteringPage = animationCtrl.create()
    .addElement(opts.enteringEl)
    .beforeRemoveClass('ion-page-invisible');

  // erstellt eine Animation für die verlassende Seite
  const leavingPage = animationCtrl.create().addElement(opts.leavingEl);

  // eigentliche Animation für die das Eintreten und Verlassen der jeweiligen Page
  if (opts.direction === 'forward') {
    enteringPage.fromTo('opacity', '0.1', '1').fromTo('transform', 'translateX(100%)', 'translateX(0)');
    leavingPage.fromTo('opacity', '1', '0.1');
  } else {
    leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)');
    enteringPage.fromTo('opacity', '0.1', '1');
  }

  // Fuegt Animation für das Eintreten und Verlassen der Seiten hinzu
  rootTransition.addAnimation(enteringPage);
  rootTransition.addAnimation(leavingPage);
  return rootTransition;
};
