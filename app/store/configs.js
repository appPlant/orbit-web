/*
 * This file is part of Orbit.
 * Copyright (c) 2016 appPlant GmbH.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Orbit.store.Configs', {
    extend: 'Ext.data.Store',

    model: 'Orbit.model.Config',
    storeId: 'configs',

    proxy: {
        type: 'ajax',
        url: '/configs',
        pageParam: '',
        startParam: '',
        limitParam: '',
        noCache: false
    },

    trackRemoved: false,
    autoLoad: true,

    listeners: {
        load: function(store, records, successful) {
            if (store.getCount() == 0) {
                store.add({ id: 1 });
            }

            Orbit.config = store.first().data;
        }
    }
});
