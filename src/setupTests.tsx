import React, {useEffect as mock_useEffect, useState as mock_useState} from 'react';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (key: string, interpolations: object) => {
			interpolations = interpolations || {};
			for (const [k, v] of Object.entries(interpolations)) {
				const regExp = new RegExp(`{{${k}}}`);
				key = key.replace(regExp, v);
			}
			return key;
		},
		initReactI18next: {
			type: '3rdParty',
			init: () => false,
		},
	}),
	Trans: () => 'Translation mock set up in setupTests.ts',
}));

jest.mock('swiper/react', () => ({
	Swiper: (
		{
			children,
			onBeforeInit,
			onBeforeSlideChangeStart,
			onFromEdge,
			onLock,
			onToEdge,
			onUnlock,
		}: {
			children: React.ReactNode
			onBeforeInit: (
				swiper: {slideNext: () => void, slidePrev: () => void, isBeginning: boolean, isEnd: boolean}
			) => void
			onBeforeSlideChangeStart: (swiper: {activeIndex: number, previousIndex: number}) => void
			onFromEdge: (swiper: {isBeginning: boolean, isEnd: boolean}) => void
			onLock: () => void
			onToEdge: (swiper: {isBeginning: boolean, isEnd: boolean}) => void
			onUnlock: () => void
		}
	) => {
		// Jest throws an "invalid variable access" error as a precaution guarding against uninitialized
		// mock variables. However, variables prefixed with "mock" are permitted, therefore `useState`
		// and `useEffect` are prefixed with "mock".
		const [inited, setInited] = mock_useState(false);
		const [clickCount, setClickCount] = mock_useState(0);

		mock_useEffect(() => {
			if (!inited) {
				onBeforeInit(
					{slideNext: jest.fn(), slidePrev: jest.fn(), isBeginning: false, isEnd: false}
				);
				setInited(true);
			}
		}, [inited, onBeforeInit, setInited]);

		const onClickMock = jest.fn(() => {
			if (clickCount === 0) {
				onBeforeSlideChangeStart({activeIndex: 1, previousIndex: 0});
				onToEdge({isBeginning: false, isEnd: false});
				onToEdge({isBeginning: true, isEnd: false});
				onToEdge({isBeginning: false, isEnd: true});
				onFromEdge({isBeginning: false, isEnd: true});
				onFromEdge({isBeginning: true, isEnd: false});
				onFromEdge({isBeginning: false, isEnd: false});
				onLock();
				onUnlock();
			} else if (clickCount === 1) {
				onBeforeInit({slideNext: jest.fn(), slidePrev: jest.fn(), isBeginning: true, isEnd: false});
			} else if (clickCount === 2) {
				onBeforeInit({slideNext: jest.fn(), slidePrev: jest.fn(), isBeginning: false, isEnd: true});
			}
			setClickCount(clickCount => clickCount + 1);
		});

		return (
			<div data-testid="swiper" onClick={onClickMock}>
				{children}
			</div>
		);
	},
	SwiperSlide: ({children}: {children: React.ReactNode}) => (
		<div>{children}</div>
	),
}));
