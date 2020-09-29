#ifndef _EXAMPLE_BRIDGE_H_
#define _EXAMPLE_BRIDGE_H_

#include <utility/YiString.h>

class ExampleBridge
{
public:
    ExampleBridge();
    virtual ~ExampleBridge();

    virtual void Init();
    virtual CYIString GetNickname() = 0;
    virtual bool SetNickname(const CYIString &nickname) = 0;
    virtual CYIString GetIPAddress() = 0;
    virtual std::vector<CYIString> GetLoadedScripts() = 0;
};

#endif // _EXAMPLE_BRIDGE_H_
