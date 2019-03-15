// router split 
import React from 'react';
import Loadable from 'react-loadable';
import { paths } from '../constants/config';

const Loading = (status, err) => (
  <div>
    now loading......
  </div>
)
 
export const createRouter = (store) => {
    const routerArr = [
        {
            path: paths.detail,
            component: Loadable({
                loading: Loading,
                loader: (a) => {
                    return import('./detail/index')
                } 
            })
        }, {
            path: paths.create,
            component: Loadable({
                loading: Loading,
                loader: (a) => {
                    return import('./create/index')
                } 
            })
        }, {
            path: paths.home,
            component: Loadable({
                loading: Loading,
                loader: (a) => {
                    console.log('entry home')
                    return import('./home/index')
                } 
            })
        }
    ];
  return routerArr; 
} 
