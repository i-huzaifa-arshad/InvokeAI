import { ButtonGroup, Flex } from '@chakra-ui/react';
import IAIButton from 'common/components/IAIButton';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AddModels from './AddModelsPanel/AddModels';
import ScanModels from './AddModelsPanel/ScanModels';

type AddModelTabs = 'add' | 'scan';

export default function ImportModelsPanel() {
  const [addModelTab, setAddModelTab] = useState<AddModelTabs>('add');
  const { t } = useTranslation();

  const handleClickAddTab = useCallback(() => setAddModelTab('add'), []);
  const handleClickScanTab = useCallback(() => setAddModelTab('scan'), []);

  return (
    <Flex flexDirection="column" gap={4}>
      <ButtonGroup isAttached>
        <IAIButton
          onClick={handleClickAddTab}
          isChecked={addModelTab == 'add'}
          size="sm"
          width="100%"
        >
          {t('modelManager.addModel')}
        </IAIButton>
        <IAIButton
          onClick={handleClickScanTab}
          isChecked={addModelTab == 'scan'}
          size="sm"
          width="100%"
        >
          {t('modelManager.scanForModels')}
        </IAIButton>
      </ButtonGroup>

      {addModelTab == 'add' && <AddModels />}
      {addModelTab == 'scan' && <ScanModels />}
    </Flex>
  );
}
