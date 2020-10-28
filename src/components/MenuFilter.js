import {
  allSelector,
  soupSelector,
  beefSelector,
  poultrySelector,
  seafoodSelector,
  porkSelector,
  vegetableSelector,
  chefSelector,
} from '../store/selectors';
import {useSelector, useDispatch} from 'react-redux';
import React, {useState} from 'react';

const MenuFilter = (action) => {
  switch (action.type) {
    case 'FILTER_ALL':
      const getAll = useSelector((state) => allSelector(state));
      return getAll;

    case 'FILTER_SOUP':
      const getSoup = useSelector((state) => soupSelector(state));
      return getSoup;

    case 'FILTER_BEEF':
      const getBeef = useSelector((state) => beefSelector(state));
      return getBeef;

    case 'FILTER_CHEF':
      const getChef = useSelector((state) => chefSelector(state));
      return getChef;

    case 'FILTER_POULTRY':
      const getPoultry = useSelector((state) => poultrySelector(state));
      return getPoultry;

    case 'FILTER_PORK':
      const getPork = useSelector((state) => porkSelector(state));
      return getPork;

    case 'FILTER_SEAFOOD':
      const getSeafood = useSelector((state) => seafoodSelector(state));
      return getSeafood;

    case 'FILTER_VEGETABLE':
      const getVegetable = useSelector((state) => vegetableSelector(state));
      return getVegetable;

    default:
      const getAll = useSelector((state) => allSelector(state));
      return getAll;
  }
};
