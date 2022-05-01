import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiTwotoneHome />,
        cName: 'nav-text'
    },
    {
        title: 'Baterías',
        path: '/Baterias',
        icon: <GiIcons.GiDrumKit />,
        cName: 'nav-text'
    },
    {
        title: 'Platos',
        path: '/Platos',
        icon: <MdIcons.MdModeStandby />,
        cName: 'nav-text'
    },
    {
        title: 'Hardware',
        path: '/Hardware',
        icon: <FaIcons.FaToolbox />,
        cName: 'nav-text'
    },
    {
        title: 'Baquetas',
        path: '/Baquetas',
        icon: <GiIcons.GiChopsticks />,
        cName: 'nav-text'
    },
    {
        title: 'Area Cliente',
        path: '/Cliente',
        icon: <FiIcons.FiUser/>,
        cName: 'nav-text'
    },
    {
        title: 'Segunda Mano',
        path: '/SegundaMano',
        icon: <FaIcons.FaDrum />,
        cName: 'nav-text'
    },
    {
        title: 'Mi Carrito',
        path: '/Carrito',
        icon: <BsIcons.BsCart />,
        cName: 'nav-text'
    }
]