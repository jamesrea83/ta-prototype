import { Meta, StoryObj } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

import Header from './Header';

export default {
	title: 'Component/Header',
	component: Header,
};

type Story = StoryObj<typeof Header>;

export const BasicHeader: Story = {};
