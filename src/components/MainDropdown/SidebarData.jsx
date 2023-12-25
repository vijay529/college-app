import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

    const SidebarData = [
    {
        title: 'I',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'II',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'III',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'IV',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'V',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Messages1',
                path: '/messages/messages1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Messages2',
                path: '/messages/messages2',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'VI',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'VII',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    },
    {
        title: 'VIII',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Reports1',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports2',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Reports3',
                path: '/reports/reports3',
                icon: <IoIcons.IoIosPaper/>,
            }
        ]
    }
];

export default SidebarData;
