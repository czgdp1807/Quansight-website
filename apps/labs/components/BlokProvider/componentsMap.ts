import { Form, Logos, Teaser } from '@quansight/shared/ui-components';

import { ColumnArticle } from '../ColumnArticle/ColumnArticle';
import { PageHeading } from '../PageHeading/PageHeading';
import { Projects } from '../Projects/Projects';
import { ComponentType } from './types';

export const componentsMap = {
  [ComponentType.PageHeading]: PageHeading,
  [ComponentType.ColumnArticle]: ColumnArticle,
  [ComponentType.Form]: Form,
  [ComponentType.Logos]: Logos,
  [ComponentType.Projects]: Projects,
  [ComponentType.Teaser]: Teaser,
};