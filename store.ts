import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authedRedicer from '@/app/auth/auth.slice';
import classResultReducer from '@/features/classResult/classResultSlice';
import contentLoaderReducer from '@/features/classResult/contentLoader.slice';
import examListReducer from '@/features/filtersAndSorting/examListSlice';
import filtersAndSortingReducer from '@/features/filtersAndSorting/filterAndSortingSlice';
import findClassFilterReducer from '@/features/filtersAndSorting/findClassFilterSlice';
import trainingSiteAsTsListReducer from '@/features/filtersAndSorting/TrainingSiteAsTsList';
import userListReducer from '@/features/filtersAndSorting/userListSlice';
import toastReducer from '@/features/toast/toastslice';

import pageLoaderReducer from '../components/common/Loader/pageLoader.slice';
import commanApiDataReducer from '../features/commonApiData/commanApiDataSlice';
import counterReducer from '../features/counter/counterSlice';
import additionalInfoReducer from '../features/filtersAndSorting/additionalInfoSlice';
import userAlignmentReducer from '../features/filtersAndSorting/alignmentSlice';
import broadcastsReducer from '../features/filtersAndSorting/broadcastSlice';
import broadcastsTemplateReducer from '../features/filtersAndSorting/broadcastTemplateSlice';
import ceClaimsReducer from '../features/filtersAndSorting/ceClaimsSlice';
import classesReducer from '../features/filtersAndSorting/classesSlice';
import classLocationReducer from '../features/filtersAndSorting/classLocationSlice';
import studentPendingRequestReducer from '../features/filtersAndSorting/classPendingRequestSlice';
import courseNameReducer from '../features/filtersAndSorting/courseNameSlice';
import coursesReducer from '../features/filtersAndSorting/coursesSlice';
import emailTemplateReducer from '../features/filtersAndSorting/emailTemplatesSlice';
import eventsReducer from '../features/filtersAndSorting/eventsSlice';
import facultyReducer from '../features/filtersAndSorting/facultySlice';
import findTcAndTsReducer from '../features/filtersAndSorting/findATcTsSlice';
import findClassFindTcLocationOrdDetailReducer from '../features/filtersAndSorting/findClassFindTcLocationOrgDetail';
import maintenanceMesssageReducer from '../features/filtersAndSorting/maintenanceSlice';
import manageInstructorReducerTs from '../features/filtersAndSorting/manageInstructorTsSlice';
import manageInstructorReducer from '../features/filtersAndSorting/manageIntructorSlice';
import manageTrainingCenterReducer from '../features/filtersAndSorting/manageTrainingCenterSlice';
import myClassesReducer from '../features/filtersAndSorting/myClassesSlice';
import notificationInboxReducer from '../features/filtersAndSorting/notificationsInboxSlice';
import otherTrainingReducer from '../features/filtersAndSorting/otherTrainingSlice';
import otherTrainingSubjectReducer from '../features/filtersAndSorting/otherTrainingSubjectSlice';
import primaryAlignmentReducer from '../features/filtersAndSorting/primaryAlignmentSlice';
import proofOfCompletionReducer from '../features/filtersAndSorting/proofOfCompletionSlice';
import reportsReducer from '../features/filtersAndSorting/reportsSlice';
import promotionReducer from '../features/filtersAndSorting/systemConfigSlice';
import traininCenterViewSlice from '../features/filtersAndSorting/TraininCenterViewSlice';
import trainingCenterListReducer from '../features/filtersAndSorting/TrainingCenterListSlice';
import TrainingSiteListReducer from '../features/filtersAndSorting/TrainingSiteListSlice';
import trainingSiteViewSlice from '../features/filtersAndSorting/TrainingSiteViewSlice';
import uploadTsHistoryReducer from '../features/filtersAndSorting/uploadTsHistorySlice';
import userClassReducer from '../features/filtersAndSorting/userManagementClassesSlice';
import viewClassesListPageReducer from '../features/filtersAndSorting/viewClassesPageSlice';
import viewClassStudentReducer from '../features/filtersAndSorting/viewClassSlice';
import visibilitySettingReducer from '../features/filtersAndSorting/viewSettingClasslistAndTcTsSlice';
import languageReducer from '../features/language/languageSlice';
import notificationsReducer from '../features/notifications/notificationsSlice';
import proxyReducer from '../features/proxyUser/proxySlice';
import oauthLoginReducer from '../features/refactoredAuthLogin/authorizedLoginSlice';
import roleReducer from '../features/role/roleSlice';
import userOrgReducer from '../features/userInfo/userOrgSlice';
import loginReducer from '../features/userLogin/loginSlice';

const reducers = combineReducers({
  counter: counterReducer,
  toast: toastReducer,
  filters: filtersAndSortingReducer,
  authed: authedRedicer,
  additionalInfo: additionalInfoReducer,
  notifications: notificationsReducer,
  courses: coursesReducer,
  courseName: courseNameReducer,
  broadcasts: broadcastsReducer,
  broadcastsTemplate: broadcastsTemplateReducer,
  otherTraining: otherTrainingReducer,
  otherTrainingSubject: otherTrainingSubjectReducer,
  pageLoader: pageLoaderReducer,
  findClassFilters: findClassFilterReducer,
  language: languageReducer,
  classResult: classResultReducer,
  contentLoader: contentLoaderReducer,
  userOrg: userOrgReducer,
  roles: roleReducer,
  pocs: proofOfCompletionReducer,
  ceclaims: ceClaimsReducer,
  emailTemplate: emailTemplateReducer,
  promotion: promotionReducer,
  maintenanceMessage: maintenanceMesssageReducer,
  trainingCenterList: trainingCenterListReducer,
  reports: reportsReducer,
  myClasses: myClassesReducer,
  traininCenterViewEdit: traininCenterViewSlice,
  trainingSiteViewEdit: trainingSiteViewSlice,
  trainingSite: TrainingSiteListReducer,
  classLocation: classLocationReducer,
  uploadTsHistory: uploadTsHistoryReducer,
  trainingSiteAsTsList: trainingSiteAsTsListReducer,
  manageTrainingCenter: manageTrainingCenterReducer,
  primaryAlignment: primaryAlignmentReducer,
  manageInstructor: manageInstructorReducer,
  faculty: facultyReducer,
  manageInstructorTs: manageInstructorReducerTs,
  notificationsInbox: notificationInboxReducer,
  classes: classesReducer,
  examList: examListReducer,
  userList: userListReducer,
  viewCalssStudentDetail: viewClassStudentReducer,
  findTcAndTs: findTcAndTsReducer,
  loginState: loginReducer,
  viewClassesPage: viewClassesListPageReducer,
  studentPendingDetail: studentPendingRequestReducer,
  commanApiDataList: commanApiDataReducer,
  visibilitySettings: visibilitySettingReducer,
  userAlignment: userAlignmentReducer,
  userClass: userClassReducer,
  proxy: proxyReducer,
  events: eventsReducer,
  authLogin: oauthLoginReducer,
  findClassFindTcLocationOrdDetail: findClassFindTcLocationOrdDetailReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'notifications',
    'pageLoader',
    'uploadTsHistory',
    'trainingSiteAsTsList',
    'notificationsInbox',
    'visibilitySettings',
  ],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
