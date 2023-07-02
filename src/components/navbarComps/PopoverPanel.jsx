import React from 'react';
import { Popover } from '@headlessui/react'
import { Link } from 'react-router-dom';
import { Dialog, Tab, Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react'

const PopoverPanel = ({ category, closeNavbar }) => {
  
  return (

    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

        <div className="relative bg-white z-10">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                {category.featured.map((item) => (
                  <div key={item.name} className="group relative text-base sm:text-sm">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                      {item.name}
                    </Link>
                    <p aria-hidden="true" className="mt-1">
                      Comprar ahora
                    </p>
                  </div>
                ))}
              </div>
              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                {category.sections.map((section) => (
                  <div key={section.name}>
                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                      {section.name}
                    </p>
                    <ul
                      role="list"
                      aria-labelledby={`${section.name}-heading`}
                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                    >
                      {section.items.map((item) => (
                        <li key={item.name} className="flex">
                          <Link to={item.href} className="hover:text-gray-800" onClick={() => closeNavbar()}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default PopoverPanel;
