// Copyright 2017-2021 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';

import React from 'react';

import AvailableCandy from '@polkadot/react-query/AvailableCandy';

export interface Props {
  className?: string;
  label?: React.ReactNode;
  params?: AccountId | AccountIndex | Address | string | Uint8Array | null;
}

function AvailableCandyDisplay ({ className = '', label, params }: Props): React.ReactElement<Props> | null {
  if (!params) {
    return null;
  }

  return (
    <AvailableCandy
      className={`ui--Available ${className}`}
      label={label}
      params={params}
    />
  );
}

export default React.memo(AvailableCandyDisplay);
