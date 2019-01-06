import React from 'react';
import {
  Box,
  Button,
  Calendar,
  Anchor,
  CheckBox,
  Grommet,
  Tabs,
  Tab,
  Text,
  Table, TableHeader, TableRow, TableCell, TableBody, TableFooter,
  DataTable,
  FormField,
  TextInput,
  Heading,
  Paragraph,
  RadioButton,
  Clock,
} from 'grommet';
import { Gremlin, CircleInformation, Currency } from 'grommet-icons';

import {
  Set, RichTabTitle, table, tableColumns, dataTable, groupColumns, dataTableColumns,
} from './playground';

const func = () => { };

export const Playground = ({ theme }) => (
  <Grommet theme={theme}>
    <Box align="start" margin="small" gap="large">
      <Box direction="row-responsive" gap="small">
        <Set colors={theme.global.colors} />
      </Box>
      <Box direction="row-responsive" gap="small">
        {Object.keys(theme.global.borderSize).map(size => (
          <Box key={size} pad="small" border={{ size }}>
            {size}
          </Box>
        ))}
      </Box>
      <Box align="center" gap="medium" direction="row-responsive">
        {[1, 2, 3, 4].map(level => <Heading level={level}>{`Heading ${level}`}</Heading>)}
      </Box>
      <Box align="center" gap="medium" direction="row-responsive">
        {['small', 'medium', 'large', 'xlarge', 'xxlarge'].map(size => <Paragraph size={size}>{`Paragraph ${size}`}</Paragraph>)}
      </Box>
      <Box gap="small" direction="row-responsive">
        <Button plain label="Plain button" onClick={func} />
        <Button label="Button" onClick={func} />
        <Button primary label="Primary button" onClick={func} />
        <Button
          icon={<Gremlin />}
          label="Icon button"
          onClick={func}
        />
        <Button disabled label="Disabled" onClick={func} />
      </Box>
      <Box gap="small" direction="row-responsive">
        <Anchor icon={<Gremlin />} label="Icon Anchor" href="#" />
        {['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'].map(size => (
          <Anchor key={size} label={size} size={size} href="#" />
        ))}
        <Box background="dark-2" pad="small">
          <Anchor reverse icon={<Gremlin />} label="Dark themed" href="#" />
        </Box>
      </Box>
      <Box gap="small" direction="row-responsive">
        <CheckBox onChange={func} label="Checked" checked />
        <CheckBox onChange={func} label="Disabled" disable />
        <CheckBox onChange={func} label="Indeterminate" indeterminate />
        <CheckBox onChange={func} label="Off toggle" toggle />
        <CheckBox onChange={func} label="On toggle" toggle checked />
      </Box>
      <Box direction="row-responsive" align="center" gap="small">
        <RadioButton
          label="Choice 1"
          name="radio"
          value="c1"
          checked
        />
        <RadioButton
          label="Choice 2"
          name="radio"
          value="c2"
        />
      </Box>
      <Box direction="row-responsive" gap="medium">
        <FormField label="Label" htmlFor="text-input">
          <TextInput id="text-input" placeholder="placeholder" />
        </FormField>
        <FormField error label="Errored" htmlFor="text-input">
          <TextInput id="text-input" placeholder="placeholder" />
        </FormField>
      </Box>
      <Box>
        <Tabs>
          <Tab
            title={
              <RichTabTitle
                icon={<CircleInformation color="accent-1" />}
                label="Personal Data"
              />
            }
          />
          <Tab
            title={
              <RichTabTitle icon={<Currency color="light-3" />} label="Payment" />
            }
          />
        </Tabs>
      </Box>
      <Table caption="Default Table">
        <TableHeader>
          <TableRow>
            {tableColumns.map(c => (
              <TableCell key={c.property} scope="col" align={c.align}>
                <Text>{c.label}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.map(datum => (
            <TableRow key={datum.id}>
              {tableColumns.map(c => (
                <TableCell key={c.property} scope={c.dataScope} align={c.align}>
                  <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {tableColumns.map(c => (
              <TableCell key={c.property} align={c.align}>
                <Text>{c.footer}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
      <DataTable
        columns={dataTableColumns.map(c => ({
          ...c,
          search: c.property === 'name' || c.property === 'location',
        }))}
        data={dataTable}
        sortable
        resizeable
      />
      <DataTable columns={groupColumns} data={dataTable} groupBy="location" sortable />
      <Box direction="row" gap="medium">
        <Clock
          type="digital"
        />
        <Clock
          type="analog"
        />
      </Box>
      <Box direction="row" gap="medium">
        <Calendar
          size="small"
          bounds={['2018-09-08', '2018-12-13']}
        />
        <Calendar
          size="medium"
          bounds={['2018-09-08', '2018-12-13']}
        />
      </Box>
    </Box>
  </Grommet>
);
