#include "ExampleModule.h"

#include "bridges/example/ExampleBridge.h"
#include "bridges/example/ExampleBridgeLocator.h"

#include <youireact/IBridge.h>
#include <youireact/NativeModuleRegistry.h>

#define LOG_TAG "ExampleModule"

using namespace yi::react;

YI_RN_INSTANTIATE_MODULE(ExampleModule, EventEmitterModule);
YI_RN_REGISTER_MODULE(ExampleModule);

static constexpr const char *SEQUENTIAL_NUMBER_EVENT_NAME = "sequentialNumber";

ExampleModule::ExampleModule()
{
    SetSupportedEvents
    ({
       SEQUENTIAL_NUMBER_EVENT_NAME
    });

    if (auto pBridge = ExampleBridgeLocator::GetExampleBridge())
    {
        pBridge->SequentialNumber.Connect([this](int32_t sequentialNumber) {
            EmitEvent(SEQUENTIAL_NUMBER_EVENT_NAME, {ToDynamic(sequentialNumber)});
        });
    }
}

ExampleModule::~ExampleModule() = default;

YI_RN_DEFINE_EXPORT_METHOD(ExampleModule, getNickname)
(Callback resolvePromise, Callback rejectPromise)
{
    if (auto pBridge = ExampleBridgeLocator::GetExampleBridge())
    {
        resolvePromise({ToDynamic(pBridge->GetNickname())});
    }
    else
    {
        rejectPromise({});
    }
}

YI_RN_DEFINE_EXPORT_METHOD(ExampleModule, setNickname)
(Callback resolvePromise, Callback rejectPromise, const CYIString &nickname)
{
    if (auto pBridge = ExampleBridgeLocator::GetExampleBridge())
    {
        resolvePromise({ToDynamic(pBridge->SetNickname(nickname))});
    }
    else
    {
        rejectPromise({});
    }
}

YI_RN_DEFINE_EXPORT_METHOD(ExampleModule, getIPAddress)
(Callback resolvePromise, Callback rejectPromise)
{
    if (auto pBridge = ExampleBridgeLocator::GetExampleBridge())
    {
        resolvePromise({ToDynamic(pBridge->GetIPAddress())});
    }
    else
    {
        rejectPromise({});
    }
}

YI_RN_DEFINE_EXPORT_METHOD(ExampleModule, getLoadedScripts)
(Callback resolvePromise, Callback rejectPromise)
{
    if (auto pBridge = ExampleBridgeLocator::GetExampleBridge())
    {
        resolvePromise({ToDynamic(pBridge->GetLoadedScripts())});
    }
    else
    {
        rejectPromise({});
    }
}
