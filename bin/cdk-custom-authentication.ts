#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCustomAuthenticationStack } from '../lib/cdk-custom-authentication-stack';

const app = new cdk.App();
new CdkCustomAuthenticationStack(app, 'CdkCustomAuthenticationStack');
