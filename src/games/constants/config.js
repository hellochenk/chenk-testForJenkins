import { createPath } from './untils';

const paths ={
    home: createPath(),
    list: createPath('list'),
    detail: createPath('detail'),
    create: createPath('create'), 
}

export {
    paths
}