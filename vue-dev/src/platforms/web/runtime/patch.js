/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
// 不同平台patch传入不同的nodeOps（表示对 “平台 DOM” 的一些操作方法）和modules（表示平台的一些模块）
export const patch: Function = createPatchFunction({ nodeOps, modules })
