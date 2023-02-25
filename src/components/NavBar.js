import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'
import { GiCastle, GiCrestedHelmet, GiDrippingSword, GiDragonBalls, GiEgyptianTemple } from 'react-icons/gi'

export default function NavBar({ currentPage, pageChanger }) {

    const iconClasses = "h-8 w-auto absolute text-white"
    const icons = [<GiCastle className={iconClasses} />, <GiCrestedHelmet className={iconClasses} />, <GiDrippingSword className={iconClasses} />, <GiDragonBalls className={iconClasses} />, <GiEgyptianTemple className={iconClasses} />]

    const iconChooser = () => {
      return icons[Math.floor(Math.random() * icons.length)]
    }

    const navigation = [
        { name: 'About Me', page: 'About', href: '#about'},
        { name: 'Portfolio', page: 'Portfolio', href: '#portfolio'},
        { name: 'Resume', page: 'Resume',  href: '#resume'},
        { name: 'Contact', page: 'Contact',  href: '#contact'},
      ]
      
      const classNames = (...classes) => { return classes.filter(Boolean).join(' ') }

  return (
    <Disclosure as="nav" className="bg-black relative">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  {iconChooser()}
                  <h2 className="text-white ml-10 absolute opacity-0 md:opacity-100">Justin Watkins</h2>
                </div>
                <div className="sm:block m-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.page}
                        href={item.href}
                        onClick={() => pageChanger(item.page)}
                        className={classNames(
                          currentPage === item.page ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.page}
                  as="a"
                  href={item.href}
                  onClick={() => pageChanger(item.page)}
                  className={classNames(
                    currentPage === item.page ? 'bg-white text-black' : 'text-white hover:bg-white hover:text-black',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      
    </Disclosure>
  )
}