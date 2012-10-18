/* DO NOT EDIT THIS FILE - it is machine generated */
#include <jni.h>
/* Header for class net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook */

#ifndef _Included_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
#define _Included_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
#ifdef __cplusplus
extern "C" {
#endif
/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    init
 * Signature: ()J
 */
JNIEXPORT jlong JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_init
  (JNIEnv *, jclass);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    start
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_start
  (JNIEnv *, jclass, jlong);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    stop
 * Signature: (J)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_stop
  (JNIEnv *, jclass, jlong);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    setDelegate
 * Signature: (JLnet/java/sip/communicator/impl/globalshortcut/NativeKeyboardHookDelegate;)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_setDelegate
  (JNIEnv *, jclass, jlong, jobject);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    registerShortcut
 * Signature: (JII)Z
 */
JNIEXPORT jboolean JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_registerShortcut
  (JNIEnv *, jclass, jlong, jint, jint);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    unregisterShortcut
 * Signature: (JII)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_unregisterShortcut
  (JNIEnv *, jclass, jlong, jint, jint);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    registerSpecial
 * Signature: (JI)Z
 */
JNIEXPORT jboolean JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_registerSpecial
  (JNIEnv *, jclass, jlong, jint);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    unregisterSpecial
 * Signature: (JI)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_unregisterSpecial
  (JNIEnv *, jclass, jlong, jint);

/*
 * Class:     net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook
 * Method:    detectSpecialKeyPress
 * Signature: (JZ)V
 */
JNIEXPORT void JNICALL Java_net_java_sip_communicator_impl_globalshortcut_NativeKeyboardHook_detectSpecialKeyPress
  (JNIEnv *, jclass, jlong, jboolean);

#ifdef __cplusplus
}
#endif
#endif
