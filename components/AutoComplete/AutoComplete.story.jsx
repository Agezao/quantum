
import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from '../../.storybook/components/Heading';
import AutoPropsApi from '../../.storybook/components/AutoPropsApi';
import ComponentPanel from '../../.storybook/components/ComponentPanel';
import { TabbedView, Tab } from '../../.storybook/components/TabbedView';
import AutoComplete from './AutoComplete';

const autoComplete = (
  <AutoComplete dataSource={[
      'Brazil',
      'Germany',
      'Mexico',
      'Usa',
    ]}
  />
);

storiesOf('3. Forms', module)
  .add('AutoComplete', () => (
    <Heading atom title="AutoComplete">
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel
            component={autoComplete}
            importModules="AutoComplete"
          />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={AutoComplete} />
        </Tab>
      </TabbedView>
    </Heading>
  ));