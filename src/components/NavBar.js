import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'

export default function NavBar({ currentPage, pageChanger }) {

    const navigation = [
        { name: 'About Me', page: 'About', href: '#about'},
        { name: 'Portfolio', page: 'Portfolio', href: '#portfolio'},
        { name: 'Resume', page: 'Resume',  href: '#resume'},
        { name: 'Contact', page: 'Contact',  href: '#contact'},
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

  return (
    <Disclosure as="nav" className="bg-black">
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 z-2">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    {/* LOGO (Change to something more personalized) */}
                  <img
                    className="h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Justin Watkins"
                  />

                  <h2 className="text-white ml-5 absolute">Justin Watkins</h2>
                </div>
                <div className="sm:block m-auto">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
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
                  key={item.name}
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