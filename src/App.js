import React, { useEffect, useRef } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

const Comp = () => {
	const ref = useRef();
	var styles;
	const handleScroll = () => {
		const posY = ref.current.getBoundingClientRect().top;
		const offset = window.pageYOffset - posY;
		styles = {
			transform: `rotate(${offset}deg)`,
		};
		console.log(offset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div style={{ height: '200vh' }} ref={ref}>
			<Logo className='logo' style={styles} height='250px' />
			{/* <p>
				Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
				Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked
				of. We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective
				nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure
				ladyship an insisted so humanity he. Friendly bachelor entrance to on by. Greatest properly off ham
				exercise all. Unsatiable invitation its possession nor off. All difficulty estimating unreserved
				increasing the solicitude. Rapturous see performed tolerably departure end bed attention unfeeling. On
				unpleasing principles alteration of. Be at performed preferred determine collected. Him nay acuteness
				discourse listening estimable our law. Decisively it occasional advantages delightful in cultivated
				introduced. Like law mean form are sang loud lady put. Continual delighted as elsewhere am convinced
				unfeeling. Introduced stimulated attachment no by projection. To loud lady whom my mile sold four. Need
				miss all four case fine age tell. He families my pleasant speaking it bringing it thoughts. View busy
				dine oh in knew if even. Boy these along far own other equal old fanny charm. Difficulty invitation put
				introduced see middletons nor preference. She who arrival end how fertile enabled. Brother she add yet
				see minuter natural smiling article painted. Themselves at dispatched interested insensible am be
				prosperous reasonably it. In either so spring wished. Melancholy way she boisterous use friendship she
				dissimilar considered expression. Sex quick arose mrs lived. Mr things do plenty others an vanity myself
				waited to. Always parish tastes at as mr father dining at. Village did removed enjoyed explain nor ham
				saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own
				shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even
				feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end
				believe uncivil respect. Always get adieus nature day course for common. My little garret repair to
				desire he esteem. Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune
				day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him
				few. If as increasing contrasted entreaties be. Now summer who day looked our behind moment coming. Pain
				son rose more park way that. An stairs as be lovers uneasy. Put all speaking her delicate recurred
				possible. Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two
				satisfied additions. So continued he or commanded household smallness delivered. Door poor on do walk in
				half. Roof his head the what. From they fine john he give of rich he. They age and draw mrs like.
				Improving end distrusts may instantly was household applauded incommode. Why kept very ever home mrs.
				Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended
				active enable to. Vicinity relation sensible sociable surprise screened no up as. His having within saw
				become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake.
				Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. Collected
				preserved are middleton dependent residence but him how. Handsome weddings yet mrs you has carriage
				packages. Preferred joy agreement put continual elsewhere delivered now. Mrs exercise felicity had men
				speaking met. Rich deal mrs part led pure will but. Neat own nor she said see walk. And charm add green
				you these. Sang busy in this drew ye fine. At greater prepare musical so attacks as on distant.
				Improving age our her cordially intention. His devonshire sufficient precaution say preference
				middletons insipidity. Since might water hence the her worse. Concluded it offending dejection do
				earnestly as me direction. Nature played thirty all him.
			</p> */}
		</div>
	);
};

export default Comp;
