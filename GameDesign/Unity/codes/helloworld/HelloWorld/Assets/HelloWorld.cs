using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HelloWorld : MonoBehaviour
{
    private void Reset()
    {
        Debug.Log("Reset �������ڷ���.............");
        Debug.Log("�������ó�ʼ������");
    }
    private void Awake()
    {
        Debug.Log("Awake �������ڷ���.............");
        Debug.Log("ʵ����������ʱ��ִ�� Awake");
    }
    private void OnEnable()
    {
        Debug.Log("OnEnable �������ڷ���.............");
    }
    // Start is called before the first frame update
    void Start()
    {
        Debug.Log("Start �������ڷ���.............");
        Debug.Log("�ű�ʵ�������غ󣬿�ʼ�ű�...");
    }
    private void FixedUpdate()
    {
        Debug.Log("FixedUpdate �������ڷ���.............");
        Debug.Log("��˵���update ��֡���޹�");
    }
    // Update is called once per frame
    void Update()
    {
        Debug.Log("Update �������ڷ���.............");
        Debug.Log("��֡����ص� update ��ÿ��ˢ�¾�ִ��");
    }
    private void LateUpdate()
    {
        Debug.Log("LateUpdate �������ڷ���.............");
    }
    void OnGUI(){
        GUI.skin.label.fontSize = 100;
        GUI.Label(new Rect(10, 10, Screen.width, Screen.height), "Hello World!");
    }

    private void OnDisable()
    {
        Debug.Log("OnDisable �������ڷ���.............");
    }

    private void OnDestroy()
    {
        Debug.Log("OnDestroy �������ڷ���.............");
    }
}
