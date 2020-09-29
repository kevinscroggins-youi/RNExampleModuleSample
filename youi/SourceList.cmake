# =============================================================================
# © You i Labs Inc. 2000-2020. All rights reserved.

set(SOURCE_TIZEN-NACL
    src/bridges/example/ExampleBridge_TizenNaCl.cpp
)

set(HEADERS_TIZEN-NACL
    src/bridges/example/ExampleBridge_TizenNaCl.h
)

set(YI_PROJECT_SOURCE
    src/App.cpp
    src/AppFactory.cpp
    src/bridges/example/ExampleBridge.cpp
    src/bridges/example/ExampleBridgeLocator.cpp
    src/modules/ExampleModule.cpp
    ${SOURCE_${YI_PLATFORM_UPPER}}
)

set(YI_PROJECT_HEADERS
    src/App.h
    src/bridges/example/ExampleBridge.h
    src/bridges/example/ExampleBridgeLocator.h
    src/modules/ExampleModule.h
    ${HEADERS_${YI_PLATFORM_UPPER}}
)
