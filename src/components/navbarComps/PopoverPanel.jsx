import React from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

const PopoverPanel = ({ category }) => {
  return (
    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
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
                    Shop now
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
                        <Link to={item.href} className="hover:text-gray-800">
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
  );
};

export default PopoverPanel;
