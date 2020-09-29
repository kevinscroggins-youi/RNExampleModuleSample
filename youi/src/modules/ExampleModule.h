#ifndef _EXAMPLE_MODULE_H_
#define _EXAMPLE_MODULE_H_

#include <youireact/NativeModule.h>

class YI_RN_MODULE(ExampleModule)
{
public:
    ExampleModule();
    virtual ~ExampleModule() final;

    YI_RN_EXPORT_NAME(Example);

    YI_RN_EXPORT_METHOD(getNickname)
    (Callback resolvePromise, Callback rejectPromise);

    YI_RN_EXPORT_METHOD(setNickname)
    (Callback resolvePromise, Callback rejectPromise, const CYIString &nickname);

    YI_RN_EXPORT_METHOD(getIPAddress)
    (Callback resolvePromise, Callback rejectPromise);

    YI_RN_EXPORT_METHOD(getLoadedScripts)
    (Callback resolvePromise, Callback rejectPromise);
};

#endif // _EXAMPLE_MODULE_H_
