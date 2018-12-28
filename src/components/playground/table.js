import React from 'react';
import { Text } from 'grommet';

const table = [
  {
    id: 1,
    name: 'Eric',
    email: 'eric@local',
    amount: 3775,
  },
  {
    id: 2,
    name: 'Chris',
    email: 'chris@local',
    amount: 5825,
  },
  {
    id: 3,
    name: 'Alan',
    email: 'alan@local',
    amount: 4300,
  },
];

let TOTAL = 0;
table.forEach((datum) => {
  TOTAL += datum.amount;
});

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

const tableColumns = [
  {
    property: 'name',
    label: 'Name',
    dataScope: 'row',
    format: datum => <Text weight="bold">{datum.name}</Text>,
  },
  {
    property: 'email',
    label: 'Email',
  },
  {
    property: 'amount',
    label: 'Amount',
    align: 'end',
    footer: amountFormatter.format(TOTAL / 100),
    format: datum => amountFormatter.format(datum.amount / 100),
  },
];

export { table, tableColumns };
