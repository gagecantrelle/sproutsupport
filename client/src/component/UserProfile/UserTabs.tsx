import { Tabs, TabList, Tab } from '@chakra-ui/react';

const UserTabs = ({ setCurrentView }) => {
  return (
    <Tabs
      id='g-tabs'
      className='u-tabs'
      variant='enclosed'
      isFitted
      w='100%'
      defaultIndex={2}
    >
      <TabList
      id='g-tabList'
      className='UserTabList'
      >
         <Tab className='uTab' onClick={() => setCurrentView('userSearch')}>
          User Search
        </Tab>
         <Tab className='uTab' onClick={() => setCurrentView('weather')}>
          Weather
        </Tab>
        <Tab className='uTab' onClick={() => setCurrentView('profileInfo')}>
          Profile Display
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default UserTabs;
